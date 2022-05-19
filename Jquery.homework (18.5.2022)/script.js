function betweenNumbers() {
    for (let i = +$("#FNum").val(); i <= +$("#SNum").val(); i++) {
        optionText = i;
        optionValue = i;
        $('#selection').append(`<option value="${optionValue}">
                               ${optionText}
                          </option>`);
    }
}