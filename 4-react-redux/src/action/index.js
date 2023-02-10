const incNumber = (num) => {
     return {
          type : "INCREMENT",
          payload : num
     }
}

const decNumber =(num) => {
     return {
          type : "DECREMENT",
          payload : num
     }
}

export {decNumber , incNumber}