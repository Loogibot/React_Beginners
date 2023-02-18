import katie from './Images/image 12.png'
import wedding from './Images/wedding.png'
import bike from './Images/mountain-bike.png'

const prices = ['136', '125', '50']

export default [
    {
        stats: {
            rating:'5.0',
            count:'(6)',
        },
        img:katie,
        details:'Life lessons with Katie Zaferes',
        price:prices[0]
    },
    {
        stats: {
            rating:'5.0',
            count:'(30)',
        },
        img:wedding,
        details:'Learn wedding photography',
        price:prices[1]
    },
    {
        stats: {
            rating:'4.8',
            count:'(2)',
        },
        img:bike,
        details:'Group Mountain Biking',
        price:prices[2]
    }
]