function wishList() {
    let inputName = prompt('Nhập tên của bạn: ');
    let inputWish = prompt('Nhập ước mơ của bạn: ');
    if(inputWish == '') {
        alert('Bạn chưa nhập ước mơ của bạn. ');
    }
    else {
        alert(`Name: ${inputName} \nWish: ${inputWish}`);
    }
}
wishList();