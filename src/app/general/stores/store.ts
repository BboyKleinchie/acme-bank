import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export abstract class Store<T> {
    protected storeResults: T;
    protected storeSubject: BehaviorSubject<T>;

    public constructor(storeResults: T) {
        this.storeResults = storeResults;
        this.storeSubject = new BehaviorSubject<T>(this.storeResults);
    }

    public clearStoreResults() {
        this.storeResults = null;
        this.emitChanges();
    }

    public setStoreResults(storeResults: T) {
        this.storeResults = storeResults;
        this.emitChanges();
    }

    public subscribe(
        unsubscribeSubject: Subject<void>,
        onChanges: (storeResults: T) => void
    ) {
        this.storeSubject
            .pipe(takeUntil(unsubscribeSubject))
            .subscribe(onChanges);
    }

    protected emitChanges(): void {
        this.storeSubject.next(this.storeResults);
    }
}