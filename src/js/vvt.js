export function validateForm() {
    let form = document.getElementById("userForm");

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        document.querySelectorAll('span').forEach(span => { 
            span.setAttribute("hidden", "")
            span.style.display = "none";
        });

        // fetch inputs which are empty
        let emptyInputs = Array.from(document.querySelectorAll('input:not([type="checkbox"])')).filter(input => input.value == '');

        // for each empty input, display the span error message.
        emptyInputs.forEach(input => {
            let id = input.id;
            let errorSpan = document.querySelector('span#' + id);
            if(errorSpan) {
                errorSpan.removeAttribute('hidden');
                errorSpan.style.display='block';
            }
        });

        // now take care of the description text area.
        let descTxt = document.querySelector('textarea');
        if(descTxt.value == '') {
            document.querySelector('span#' + descTxt.id).removeAttribute('hidden');
            document.querySelector('span#' + descTxt.id).style.display = "block";
        }

        // make sure the there is only one gender checkbox checked.
        let genderChk = Array.from(document.querySelectorAll('input[type="checkbox"]')).filter(chk => chk.checked);
        if(genderChk.length == 0 || genderChk.length > 1) {
            document.querySelector('span#gender').removeAttribute('hidden');
            document.querySelector('span#gender').style.display = "block";
        }


        let state = document.querySelector('select#state');
        console.log(state.value);
        if(!state.value) {
            document.querySelector('span#state').removeAttribute('hidden');
            document.querySelector('span#state').style.display = "block";

        }
    });
}