function bulbOff(){
    document.getElementById('bulbImage').src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById('catImage').src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById('switchStatus').textContent="switchOff";
    document.getElementById('switchOff').style.backgroundColor="#cbd2d9";
    document.getElementById('switchOn').style.backgroundColor="#22c55e";
}

 function bulbOn(){
    document.getElementById('bulbImage').src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById('catImage').src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById('switchStatus').textContent="switchOn";
    document.getElementById('switchOff').style.backgroundColor="#e12d39";
    document.getElementById('switchOn').style.backgroundColor="#cbd2d9";
 }