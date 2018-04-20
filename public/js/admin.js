// $(document).ready(function () {
// page is now ready, initialize the calendar...
// console.log(location.pathname.match(/productions\/(\d+)/)[1]);
const user_id = location.pathname.match(/users\/(\d+)/)[1];
const production_id = location.pathname.match(/productions\/(\d+)/)[1];
const addDate = document.getElementById('add-date');
const type = document.getElementById('type');
const sceneSelect = document.getElementById('scene-div');
const eventView = document.getElementById('event-view');
const eventContent = document.getElementById('event-content');
type.addEventListener('change', function (event) {
    if (this.value === 'rehearsal') {
        sceneSelect.classList.remove('uk-hidden');
    };
})

window.onclick = function (event) {
    if (event.target === addDate || event.target === eventView) {
        event.target.style = "";
        event.target.classList.remove('uk-open');
    }
}

$('#calendar').fullCalendar({
    editable: false,
    // put your options and callbacks here
    eventClick: function (calEvent, jsEvent, view) {
        eventContent.innerText = `${calEvent.className}: ${calEvent.title}`;
        eventView.style.display = 'block';
        eventView.classList.add('uk-open');
        // alert(`${calEvent.className}: ${calEvent.title}`);
        // alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
        // alert('View: ' + view.name);
        // console.log(jsEvent.target);

        // change the border color just for fun
        // $(this).css('border-color', 'red');
    },

    dayClick: function (date, jsEvent, view) {
        addDate.style.display = 'block';
        addDate.classList.add('uk-open');
    },
    // customButtons: {
    //     add_event: {
    //         text: 'Add',
    //         click: () => {
    //             addDate.style.display = 'block';
    //             addDate.classList.add('uk-open');
    //         }
    //     }
    // },
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