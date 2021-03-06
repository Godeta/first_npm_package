//npm init to create the package.json (après avoir fait github et autre) puis npm publish
//error no permission to publish -> changer le nom

function shadowizard(options) {
    let images = document.querySelectorAll('.shadowizard');

    if (options.shadow_type === 'hard') {
        options.shadow_type = '0px'
    } else {
        options.shadow_type = '15px'
    }

    images.forEach(image => {
        //attention à bien donner les variables sous cette forme
        image.style.boxShadow = `10px 10px ${options.shadow_type} 1px rgba(0,0,0,0.12)`;

        if (options.padding) {
            image.style.padding = '1em';
        }
    })
}

module.exports.shadowizard = shadowizard;