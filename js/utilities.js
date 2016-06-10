/**
 * Adds an event to an element
 * @param obj The element to which to add the event
 * @param type  The type of the event
 * @param fn The function to add to the element
 */
function addEvent(obj, type, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(type, fn, false); // everything else
    } else if (obj.attachEvent) {
        obj.attachEvent("on" + type, fn); //IE
    }
}
