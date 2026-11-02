
// Q5: Boolean Logic Access System

// Declare security conditions
let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

// Check all security conditions
if (
    isAlarmOn &&
    isDoorLocked &&
    isWindowClosed &&
    isOwnerInside
) {
    console.log("Secure");
}
else {
    console.log("Unsafe");
}

// Test another condition
isDoorLocked = false;

if (
    isAlarmOn &&
    isDoorLocked &&
    isWindowClosed &&
    isOwnerInside
) {
    console.log("Secure");
}
else {
    console.log("Unsafe");
}
