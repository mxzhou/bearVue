export default function loadInfo() {
  return new Promise((resolve) => {
    resolve(
      {
        "ok": true,
        "data": [
          {path: 'alert', text: 'alert'},
          {path: 'toast', text: 'toast'},
          {path: 'loading', text: 'loading'}
        ]
      });
  });
}
