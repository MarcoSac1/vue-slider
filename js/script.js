
// console.log(slides);



const {createApp} = Vue

createApp({
    data() {
        return {
            slides: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                },
                {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, 
                {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, 
                {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, 
                {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ],
            activeEl : 0,
        }
    },
    metods:{
        getSlideIndex(slides){
            return this.slides.indexOf(slides);
        },
        eventNext(){
            if(this.activeEl < this.slides.lenght - 1){
                this.activeEl = this.activeEl + 1
            }else{
                this.activeEl = 0
            }
        },
        eventPrevious(){
            if (this.activeEl > 0) {
                this.activeEl = this.activeEl - 1
            }else{
                this.activeEl = 4
            }
        }
    }
}).mount('#app')


// metods:{
//     eventPrevious: function(){
//         if (this.index > 0) {
//             this.slide = this.slides[this.index];
//             console.log(this.slide);
//             this.index--
//         }else{
//             this.index = Number.parseInt(this.slide,length -1);
//             this.slide = this.slide[this.index];
//             console.log(this.slide);
//             this.index--
//         }
//     }
// }
// eventNext: function () {
//     if (this.index < this.slide.length) {
//         this.slide = this.slide[this.index];
//         console.log(this.slide);
//         this.index++
//     }else{
//         this.index = 0
//         this,slide = this.slide[this.index];
//         console.log(this.slide);
//         this.index++
//     }
    
// },



