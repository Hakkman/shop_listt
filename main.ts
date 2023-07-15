// creating 
let shoplist = [ {
    "f_name" : "Oil",
    "price" : 3.00,
}
, {
    "f_name" : "Tomatoes",
    "price" : 20.00,
}
, {
    "f_name" : "Zamzam",
    "price" : 5.00,
}
, {
    "f_name" : "Onion",
    "price" : 20.00,
}
, {
    "f_name" : "Okro",
    "price" : 30.00,
}
, {
    "f_name" : "Cereals",
    "price" : 10.00,
}
]
// define a function to display the current item on the led display
input.onGesture(Gesture.Shake, function on_gesture_shake() {
    
    basic.forever(function on_forever() {
        
    })
    shoplist = []
})
