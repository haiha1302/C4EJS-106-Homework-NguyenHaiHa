function solveEquation(a, b, c) {
    let x1 = 0;
    let x2 = 0;
    let x = 0;
    let x_duynhat = 0;
    if(a == 0) {
        if(b == 0) {
            if(c == 0) {
                console.log('Phương trình vô số nghiệm');
            }
            else {
                console.log('Phương trình vô nghiệm');
            }
        }
        else {
            x_duynhat = -c / b;
            console.log(`Phương trình có nghiệm duy nhất là: ${x_duynhat}`);
        }
    }
    else {
        let delta = (b * b) - (4 * a * c);
        if(delta > 0) {
            x1 = (-b + Math.sqrt(delta)) / (2 * a);
            x2 = (-b - Math.sqrt(delta)) / (2 * a);
            console.log(`Phương trình có 2 nghiệm là x1 = ${x1}, x2 = ${x2}`);
        }
        else if(delta == 0) {
            x = (-b) / (2 * a);
            console.log(`Phương trình có 1 nghiệm là x = ${x}`);
        }
        else {
            console.log('Phương trình vô nghiệm');
        }
    }
    return x, x1, x2, x_duynhat;
}

solveEquation(4, -2, -6)
solveEquation(2, -7, 3)
solveEquation(1, -4, 4)
solveEquation(3, 2, 5)
solveEquation(0, 0, 0)
solveEquation(0, 0, 1)
solveEquation(0, 1, 3)