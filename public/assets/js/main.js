const checkbox_wrapper = document.querySelector( 'form .flexbox' );
const checkbox = document.querySelector( 'form .flexbox span' );

checkbox_wrapper.addEventListener("click", function(){
    checkbox.classList.toggle( "checked" );
    const isChecked = checkbox_wrapper.getAttribute("aria-checked") === "true";
    checkbox_wrapper.setAttribute("aria-checked", !isChecked);
    checkbox_wrapper.classList.toggle("checked");
});