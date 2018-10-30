

function vbody(body){

    status = {
        status: '',
        comment: ''   
    }

    if ( body.length === 0 ) {
        status.status = 'error';
        status.comment = `Message body must not be empty`

    } else if (typeof body !== 'string') {
        status.status = 'error';
        status.comment = 'Body must be a string'   

    } else if ( body.length >= 1000 ) {
        status.status = 'error';
        status.comment = `Message body must be less than 1000 characters, message char count = ${body.length}`
    }

    return status

}

function vdestination(destination){

    status = {
        status: '',
        comment: ''   
    }

    if ( destination.length == 0 ) {
        status.status = 'error';
        status.comment = `Message destination must not be empty`
    } else if (typeof destination !== 'string') {
        status.status = 'error';
        status.comment = 'Body must be a string'   
    } else if ( destination.length >= 20 ) {
        status.status = 'error';
        status.comment = `Message destination must be less than 20 characters, destination char count = ${destination.length}`
    }

    return status
}


function vJson(jsonStr){
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
    
}

function vJsonLengthValidator(input) {

    status = {
        status: '',
        comment: ''   
    }

    if ( Object.keys(input).length < 2 ) {
        status.status = 'error';
        status.comment = 'JSON has fewer fields than it should'
    } else if ( Object.keys(input).length > 2){
        status.status = 'error';
        status.comment = 'JSON has more fields than it should'
    }

    return status

}

  
module.exports =  {
    vbody,
    vdestination,
    vJson,
    vJsonLengthValidator
  }