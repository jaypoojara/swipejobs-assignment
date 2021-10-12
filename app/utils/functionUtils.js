import moment from 'moment';
import momentTz from 'moment-timezone';

export const getDuration = (startDate, endDate) => {
  const days = moment(startDate)
    .local()
    .format('MMM DD, ddd HH:mm A');
  const endDateTemp = moment(endDate)
    .local()
    .format('HH:mm A');
  const timeZone = momentTz.tz.guess();
  const timeZoneAbr = momentTz.tz(timeZone).zoneAbbr();
  return `${days} - ${endDateTemp} ${timeZoneAbr}`;
};
