'use strict';

angular.module('calendarConceptApp')
  .service('DateManager', function () {


    /**
     * If the user wants the calendar to start on monday, choose 1
     * If the user wants the calendar to start on sunday, choose 0
     * @const {number}
     */
    var WEEK_BEGINS = 1;

    /**
     * The week will end with either a saturday or a sunday
     * @const {number}
     */
    var WEEK_ENDS = WEEK_BEGINS + 6;

    /**
     * Switch for month view and agenda view
     * @type {boolean}
     */
    var displayType = true;
    /**
     * defaults to current month
     * @type {number}
     */
    var currentMonth = new Date().getMonth();
    /**
     * Defaults to current year
     * @type {number}
     */
    var currentYear = new Date().getFullYear();

    /**
     *
     */
    var daysInView = getDaysInView(currentYear, currentMonth);

    /**
     * gets month, then gets viewable days to to make complete rectangle
     * @private
     * @param {number} year
     * @param {number} month
     * @returns {Array}
     */
    function getDaysInView(year, month) {
      var date = new Date(year, month, 1);
      var monthStart = angular.copy(date);
      var monthStartDay, monthEnd;
      var days = [];

      while (date.getMonth() === month) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
      }

      while (monthStart.getDay() > WEEK_BEGINS) {
        monthStart.setDate(monthStart.getDate() - 1);
        days.unshift(angular.copy(monthStart));
      }
      monthEnd = angular.copy(days[days.length - 1]);
      while ((monthEnd.getDay() + 1) < WEEK_ENDS) {
        console.log(monthEnd.getDay(), WEEK_ENDS);
        monthEnd.setDate(monthEnd.getDate() + 1);
        days.push(angular.copy(monthEnd));

      }

      return days;
    }

    /**
     * setter for toggling between month view and agenda view
     */
    this.toggleViewType = function () {
      this.isCalendarView = !this.isCalendarView;
    };

    this.setDateRange = function (startDate, endDate) {

    };

    this.getDateRange = function (startDate, endDate) {

    };

    this.getMonth = function () {
      return currentMonth;
    }

    this.setMonth = function (month) {
      currentMonth = month;
    };

    this.getYear = function(){
      return currentYear;
    };

    this.setYear = function(year){
      currentYear = year;
    };

    this.setDate = function(year, month){
      currentYear = year;
      currentMonth = month;
    };

    /**
     * Publicly accessible daysInView which both gets and sets, depending on arguments
     * @public
     * @returns {Array}
     */
    this.daysInView = function () {
      return daysInView = getDaysInView(currentYear, currentMonth);
    };


    this.setWeek = function () {

    };

    this.setDay = function () {

    }
    /**
     * Toggle between month and agenda views
     * offers option to override toggle
     * @param {boolean=} bool
     * @returns {boolean}
     */
    this.toggleDisplayType = function(bool){
      if (typeof bool === 'boolean') return displayType = bool;
      return displayType = !displayType
    }

  });
