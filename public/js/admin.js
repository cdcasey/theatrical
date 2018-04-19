// $(document).ready(function () {
// page is now ready, initialize the calendar...
// console.log(location.pathname.match(/productions\/(\d+)/)[1]);
const user_id = location.pathname.match(/users\/(\d+)/)[1];
const production_id = location.pathname.match(/productions\/(\d+)/)[1];
const addDate = document.getElementById('add-date');

window.onclick = function (event) {
    if (event.target === addDate) {
        addDate.style = "";
        addDate.classList.remove('uk-open');
    }
}

$('#calendar').fullCalendar({
    editable: true,
    // put your options and callbacks here
    eventClick: function (calEvent, jsEvent, view) {

        alert('Event: ' + calEvent.title);
        alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
        alert('View: ' + view.name);
        console.log(jsEvent.target);

        // change the border color just for fun
        $(this).css('border-color', 'red');
    },

    dayClick: function (date, jsEvent, view) {
        // alert('a day has been clicked!');
        console.log(date.calendar());
        console.log(jsEvent.target);
        console.log(view.calendar);

    },
    customButtons: {
        add_event: {
            text: 'Add',
            click: () => {
                addDate.style.display = 'block';
                addDate.classList.add('uk-open');
            }
        }
    },
    header: {
        right: 'prev,next today',
        left: 'title',
        center: 'add_event'
    },
    events: {
        url: `${location.pathname}/fullcalendar`,
        cache: true
    }
    // events: [
    //     {
    //         id: 1,
    //         title: 'All Day Event',
    //         start: '2018-04-15',
    //         user_id: 3
    //     },
    //     {
    //         title: 'Long Event',
    //         start: '2018-04-16',
    //         end: '2018-04-18'
    //     },
    // ]
});
// });

// (function () {
//     const calendar = document.getElementById('calendar');
//     calendar.fullCalendar({});
// })()