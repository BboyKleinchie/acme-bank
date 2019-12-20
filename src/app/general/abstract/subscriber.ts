import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * Any class/component/etc subscribing to anything such as a store
 * should implement this class to manage unsubscribing to said store (as an example)
 * the said class/component/etc should also implement the onDestroy interface
 * to ensure the destroyed subject gets emitted and unsubscribes
 * see examples of usage in AccountsComponent
 */
export abstract class Subscriber<T> implements OnDestroy {
    protected destroyed: Subject<T>;
    private destroyedValue: T;

    public constructor(value?: T) {
        this.destroyed = new Subject<T>();
        this.destroyedValue = value;
    }

    public ngOnDestroy(): void {
        this.destroyed.complete();
        this.destroyed.next(this.destroyedValue);
    }
}