import dayjs from 'dayjs';
export default function(app) {
  app.directive('format-time', {
    mounted(el, bindings) {
      console.log(Number(el.textContent));
      // const content = el.textContent;
      const time = parseInt(el.textContent);
      console.log(time);

      const formatString = bindings.value;

      if (formatString) {
        el.textContent = dayjs(time).format(formatString);
      } else {
        el.textContent = dayjs(time).format('YYYY-MM-DD HH:mm:ss');
      }
    },
  });
}
