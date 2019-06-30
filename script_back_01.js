        function maleGender(){ 
        var pic = "img/sadida.png"
        document.getElementById('charPic').src = pic.replace();
        player.gender = "male";
        }
        function femGender(){ 
        var pic = "img/sadiette.png"
        document.getElementById('charPic').src = pic.replace();
        player.gender = "female";
        }
        function chName() {
        	player.name = getElementByName(nameInput).value;

        }
        let spearButton = document.querySelector("#item101");
        let axeButton = document.querySelector("#item102");
        let helmetButton = document.querySelector("#item103");
        let spearBool = false;
        let axeBool = false;
        let helmetBool = false;

        // ------------------ ItemSection01 ---------------- //

        function spearToggle() {
                spearBool = true;
                spearButton.style.border = "orange 3px solid";
                spearButton.style.borderRadius = "15px";
                player.item1 = "spear";
                let charItem01 = "img/spear.png"
                document.getElementById("char_item101").src = charItem01.replace();
                if (axeBool || helmetBool == true) {
                        axeButton.style.border = "#232a22 3px solid";
                        helmetButton.style.border = "#232a22 3px solid";
                        helmetBool = false;
                        axeBool = false;
        }
}
        function axeToggle() {
                axeBool = true;
                axeButton.style.border = "orange 3px solid";
                axeButton.style.borderRadius = "15px";
                player.item1 = "axe";
                let charItem01 = "img/axe.png"
                document.getElementById("char_item101").src = charItem01.replace();
                if (spearBool || helmetBool == true) {
                        spearButton.style.border = "#232a22 3px solid";
                        helmetButton.style.border = "#232a22 3px solid";
                        helmetBool = false;
                        spearBool = false;
        }
        }
        function helmetToggle() {
                helmetBool = true;
                helmetButton.style.border = "orange 3px solid";
                helmetButton.style.borderRadius = "15px";
                player.item1 = "helmet";
                let charItem01 = "img/helmet.png"
                document.getElementById("char_item101").src = charItem01.replace();
                if (axeBool || spearBool == true) {
                        spearButton.style.border = "#232a22 3px solid";
                        axeButton.style.border = "#232a22 3px solid";
                        spearBool = false;
                        axeBool = false;
        }
}

        spearButton.onclick = spearToggle;
        axeButton.onclick = axeToggle;
        helmetButton.onclick = helmetToggle;

        //---------------------------------------------------------------//
        

        let player = {name: null, gender: "female", item1: null, item2: null, item3: null};


        let charItem02 = "img/no_item.png"
        let charItem03 = "img/no_item.png"