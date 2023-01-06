function changeSalesTextColorToGreen()  {
    const salesText = document.getElementById('salesText')
    console.log(`this is the salesTextVariable: ${salesText}`)
    salesText.style.color = '#05ffa6'
    salesText.style.border = '1px solid #05ffa6'
    salesText.style.padding = '10px'
    
}

function changeSalesTextColorToWhite() {
    const whiteSalesText = document.getElementsByClassName('salesText')
    salesText.style.color = 'white'
    salesText.style.border = '1px solid white'
    salesText.style.padding = '10px'
    salesText.style.borderRadius = '5px'
}


