import swal from 'sweetalert2';

export class Alertas {
  alertToast(message: string, type: string): void {
    if (type === 'success') {
      swal.fire({
        toast: true,
        position: 'bottom',
        icon: 'success',
        title: message,
        background: '#2c2727',
        color: 'whitesmoke',
        showConfirmButton: false,
        timer: 2500,

      });
    } else {
      if (type === 'error') {
        swal.fire({
          toast: true,
          position: 'bottom',
          icon: 'error',
          title: message,
          background: '#2c2727',
          color: 'whitesmoke',
          showConfirmButton: false,
          timer: 4500,
        });
      } else if (type === 'warning') {
        swal.fire({
          toast: true,
          position: 'bottom',
          icon: 'warning',
          title: message,
          background: '#2c2727',
          color: 'whitesmoke',
          showConfirmButton: false,
          timer: 4500,
        });
      } else {
        swal.fire({
          toast: true,
          position: 'bottom',
          icon: 'info',
          title: message,
          showConfirmButton: false,
          timer: 3500,
        });
      }
    }
  }
  alertBarraSpiner(message: string): void {
    const Toast = swal.mixin({
      toast: true,
      position: 'bottom',
      showConfirmButton: false,
      timer: 5000,
      timerProgressBar: true,
      willOpen: (toast) => {
        toast.addEventListener('mouseenter', swal.stopTimer);
        toast.addEventListener('mouseleave', swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: 'info',
      title: '<h3>' + message + '</h3>',
    });
  }
  alertaDefault(message: string, type: string): void {
    if (type === 'error') {
      swal.fire('Error', message, 'error');
    }
    if (type === 'success') {
      swal.fire('Exito', message, 'success');
    }
    if (type === 'info') {
      swal.fire('Información', message, 'info');
    }
  }
}
