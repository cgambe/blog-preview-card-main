window.addEventListener('load', function(){

    let button = document.querySelector('button');
    let dayInput = document.querySelector('[name="day"]');
    let monthInput = document.querySelector('[name="month"]');
    let yearInput = document.querySelector('[name="year"]');

    button.addEventListener('click', calculateDays );
});

function validateDay(){
    let day = document.querySelector('[name="day"]');
    let month = document.querySelector('[name="month"]');
    let year =  document.querySelector('[name="year"]');

    if( !day.value.length ){
        document.getElementById('dayValidate').textContent = "This field is required.";
        return false;
    }

    day = day.value;
    month = month.value;
    year = year.value;

    if( is31( month ) == true && day > 31){
        document.getElementById('dayValidate').textContent = "Must be a valid date.";

        return false;
    }

    if( is30( month ) == true && day > 30){
        document.getElementById('dayValidate').textContent = "Must be a valid date.";
        return false;
    }

    if( is28( month, year ) == true && day > 28){
        document.getElementById('dayValidate').textContent = "Must be a valid date.";
        return false;
    }

    if( is29( month, year ) == true && day > 29){
        document.getElementById( 'dayValidate').textContent = "Must be a valid date.";
        return false;
    }

    return true;
}


function validateMonth(){
    let monthInput = document.querySelector('[name="month"]');

     if( !monthInput.value.length ){
        document.getElementById('monthValidate').textContent = "This field is required.";
        return false;
    }

    if( monthInput.value > 12 || monthInput.value < 1  ){
        document.querySelector('#monthValidate').textContent = "Must be a valid month";
        return false;
    }

    return true;
}

function validateYear(){
    let yearInput = document.querySelector('[name="year"]');
    let date = new Date();

    
    if( !yearInput.value.length ){
        document.getElementById('yearValidate').textContent = "This field is required.";
        return false;
    }

    let thisYear = date.getFullYear();
    date.setFullYear( yearInput.value );
    

    if( !thisYear >=  yearInput.value  ){
        document.querySelector('#yearValidate').textContent = "Must be in the past";
        return false;
    }

    return true;
}

function is31( month ){
    return ( ["1","3","5","7","8","10","12" ].includes( month.toString() ) );
}

function is30( month ){
    return ( ["4","6","9","11"].includes( month.toString() ) );
}

function is28( month, year ){
    return ( month == "2" && !leapYear( year ) );
}

function is29( month, year ){
    return ( month == "2" && leapYear( year ) );
}

function leapYear( year ){
    return ( (year % 4 ) == 0 );
}

function calculateDays(){
    if( validateDay() && validateMonth() && validateYear() ){
        let dayInput = document.querySelector('[name="day"]');
        let monthInput = document.querySelector('[name="month"]');
        let yearInput = document.querySelector('[name="year"]');

        let date = new Date();
        let today = new Date();
        today.setHours(0);
        date.setHours(0)

        

        date.setFullYear( yearInput.value );
        date.setMonth( monthInput.value - 1);
        date.setDate( dayInput.value  );

        let difference = Number( date ) - Number( today );

        if( difference >= 0){
            document.querySelector('#yearValidate').textContent = "Must be in the past";
            return false;
        }

        let days = difference / - ( (1000 * 60 * 60 ) * 24 );

        let years = ( leapYear( yearInput ) ) ? days / 366 : days / 365;
        days = ( leapYear( yearInput ) ) ? days % 366 : days % 365;

        let months = days / 30;
        days = days % 30;

        let data = {
            years: Math.floor( years ),
            months: Math.floor( months ),
            days: Math.floor( days )
        }

        document.querySelector('#yearValidate').textContent = "";
        document.querySelector('#dayValidate').textContent = "";
        document.querySelector('#monthValidate').textContent = "";
        displayData( data );
    }

}


function displayData( data ){
    let day = document.getElementById( 'daysOutput' );
    let month = document.getElementById( 'monthsOutput' );
    let year = document.getElementById( 'yearsOutput' );
    let speed = 0.1;

    let yearI = 1;
    
    let yearId = setInterval( function(){
        year.textContent = yearI;

        yearI++;

        if( yearI >= data.years ){
            year.textContent = data.years;
            clearInterval( yearId );
        }
    }, 1000 * speed );

    let monthI = 0;

    let monthId = setInterval( function(){
        month.textContent = monthI;

        monthI++;

        if( monthI >= data.months ){
            month.textContent = data.months;
            clearInterval( monthId );
        }
    }, 1000 * speed );


    let dayI = 0;

    let daysId = setInterval( function(){
        day.textContent = dayI;

        dayI++;

        if( dayI >= data.days ){
            day.textContent = data.days;
            clearInterval( daysId );
        }
    }, 1000 * speed );
}
