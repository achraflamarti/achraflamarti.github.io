let pass = document.querySelector('.generate_txt');
function random(num){
    var variable = parseInt(Math.random()*num);
    return variable;
}
function generate_pass(){
    const miniscules = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const majuscules = [];
    for(let i = 0 ; i < miniscules.length ; i++){
        majuscules.push(miniscules[i].toUpperCase());
    }
    const numbers = ['0','1','2','3','4','5','6','7','8','9'];
    const special = ['!','@','+','-','*','%'];

    const all = [miniscules, majuscules, numbers, special];
    var cpt = 0;
    let password = '';
    while(cpt < 20){
        let type = all[random(4)];
        console.log(type);
        password += type[random(type.length)];
        cpt++;
    }
    pass.innerText = password;
}

