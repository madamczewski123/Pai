function maniek(){
    const user = {
    Email: document.getElementById("Email").value,
    Haslo: document.getElementById("Haslo").value,
    };
    const object = {
    NazwaPostaci: document.getElementById("NazwaPostaci").value,
    Klasa: document.getElementById("Klasa").value,
    Waga: document.getElementById("Waga").value,
    Wzrost: document.getElementById("Wzrost").value,
    Urodziny: new Date(document.getElementById("Urodziny").valueAsDate),
    BMI: function(){
        return (this.Waga / ((this.Wzrost/100)**2)).toFixed(1);
    },
    wiek: function(){
        const dzis = new Date();
        return dzis.getFullYear() - this.Urodziny.getFullYear();
    }};

    document.getElementById("2Email").innerHTML=user.Email;
    document.getElementById("2Haslo").innerHTML=user.Haslo;
    document.getElementById("2Klasa").innerHTML+=object.Klasa;
    document.getElementById("2Waga").innerHTML+=object.Waga;
    document.getElementById("2Wzrost").innerHTML+=object.Wzrost;
    document.getElementById("DoWpisaniaPostaci").innerHTML="<h4>Postać: "+object.NazwaPostaci+"</h4>";
    document.getElementById("BMI").innerHTML+=object.BMI();
    document.getElementById("Wiek").innerHTML += object.wiek();
    document.getElementById("DniDoUrodzin").innerHTML += object.Urodziny.getMonth() +"."+ object.Urodziny.getDate();

    document.getElementById("Rejestracja").className="d-none container-fluid";
    document.getElementById("Prezentacja").className="d-block container-fluid";
}

