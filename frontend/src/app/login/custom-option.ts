import { ToastOptions } from 'ng2-toastr/ng2-toastr';

export class CustomOption extends ToastOptions {
    positionClass: 'toast-top-left';
    animate = 'flyRight'; 
}
