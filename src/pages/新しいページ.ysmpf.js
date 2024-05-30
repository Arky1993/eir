import wixBookings from 'wix-bookings';

let availableSlots;
let slotOptions;
let selectedSlot;
let slotIndex;

$w.onReady(function () {

});

export function bookButton_click(event) {
    wixBookings.getServiceAvailability(event.context.itemId)
        .then((availability) => {
            availableSlots = availability.slots;
            slotOptions = availableSlots.map((slot) => {
                let date = slot.startDateTime;
                return {
                    "slotDate": date.toLocaleDateString() + " " + date.toLocaleTimeString(),
                }
            });
            $w('#slotTable').rows = slotOptions;
        });
    let $item = $w.at(event.context);
    let formFields = $item("#BookingsDataset").getCurrentItem().form.fields;

    formFields = formFields.filter(field => field.constraints.required)

    $w('#formFieldRepeater').data = formFields;
}

export function slotTable_rowSelect(event) {
    selectedSlot = event.rowData;
    slotIndex = event.rowIndex;
}

export function formFieldRepeater_itemReady($item, itemData, index) {
    $item("#fieldInput").placeholder = itemData.label;
}

export function checkoutButton_click(event) {
    let formFieldValues = []; // list of values user entered

    // for each item in the repeater  
    $w('#formFieldRepeater').forEachItem(($item, itemData, index) => {
        // add an object containing the corresponding form field's
        // ID and the value that the user entered
        formFieldValues.push({
            "_id": itemData._id,
            "value": $item("#fieldInput").value
        });
    });

     // build bookingInfo object
  let bookingInfo = {
    // selected slot object  
    "slot": availableSlots[slotIndex],
    // form filed values collected above
    "formFields": formFieldValues
  };
 
  // booking checkout  
  wixBookings.checkoutBooking(bookingInfo)
    .then( (results) => {
      $w("#confirmationText").text = `Booking ID: ${results.bookingId} Status: ${results.status}`;
    } );

}