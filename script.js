let form = document.forms.register
let item1 = document.querySelector(".item1")
let item2 = document.querySelector(".item2")
let item3 = document.querySelector(".item3")
let data = []
form.onsubmit = () =>{
    event.preventDefault()

    let obj = {}
    let fm = new FormData(event.target)
    fm.forEach((value, key) => {
        obj[key] = value 
    })

    data.push(obj)
    react()

}



let react = () =>{
    item1.innerHTML = ""
    item2.innerHTML = ""
    item3.innerHTML = ""

    for(let item of data){
        if(item.name == false || item.age == false){
            alert('error')
        } else {
            let person = document.createElement('p')
            let age = document.createElement('p')
            let div = document.createElement('div')
    
    
            person.innerText = item.name
            age.innerText = "Age: " + item.age
    
            
            div.classList.add('box')
            person.classList.add("person-active")
            age.classList.add("age-active")
    
    
            if(item.age <= 25){
                item1.append(div)
                div.append(person, age)
            } else if(item.age <= 50){
                item2.append(div)
                div.append(person, age)
    
            } else {
                item3.append(div)
                div.append(person, age)
    
            }






        }
    }




}






// let react = () =>{
//     item1.innerHTML = ""
//     item2.innerHTML = ""
//     item3.innerHTML = ""

//     for(let item of data){
//         if(item.name == "" || item.age == ""){
//             alert('error')
//         } else {
//             let person = document.createElement('p')
//             let age = document.createElement('p')
//             let div = document.createElement('div')
    
    
//             person.innerText = item.name
//             age.innerText = "Age: " + item.age
    
            
//             div.classList.add('box')
//             person.classList.add("person-active")
//             age.classList.add("age-active")
    
    
//             if(item.age <= 25){
//                 item1.append(div)
//                 div.append(person, age)
//             } else if(item.age <= 50){
//                 item2.append(div)
//                 div.append(person, age)
    
//             } else {
//                 item3.append(div)
//                 div.append(person, age)
    
//             }






//         }
//     }




// }








// let react = () =>{
//     item1.innerHTML = ""
//     item2.innerHTML = ""
//     item3.innerHTML = ""

//     for(let item of data){
//         let person = document.createElement('p')
//         let age = document.createElement('p')
//         let div = document.createElement('div')


//         person.innerText = item.name
//         age.innerText = "Age: " + item.age

        
//         div.classList.add('box')
//         person.classList.add("person-active")
//         age.classList.add("age-active")


//         if(item.age <= 25){
//             item1.append(div)
//             div.append(person, age)
//         } else if(item.age <= 50){
//             item2.append(div)
//             div.append(person, age)

//         } else {
//             item3.append(div)
//             div.append(person, age)

//         }
        
//     }






// }