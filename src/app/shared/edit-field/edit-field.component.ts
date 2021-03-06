import {
  Component,
  SimpleChange,
  EventEmitter,
  OnInit,
  OnChanges,
  ViewChild,
  Input,
  Output } from '@angular/core'

@Component({
  selector: 'mute-edit-field',
  templateUrl: './edit-field.component.html',
  styleUrls: [ './edit-field.component.scss' ]
})
export class EditFieldComponent implements OnInit, OnChanges {

  @Input() textAlign = 'center'
  @Input() color = '#fff'
  @Input() width = '27rem'
  @Input() value = ''
  @Input() emptyValue: string
  @Input() icon = ''
  @Input() selectAll = true
  @Output() onDone = new EventEmitter<string>()

  @ViewChild('editableElm') editableElm
  @ViewChild('bottomLine') bottomLine
  public viewState = true
  public preEditState = false
  public editState = false

  constructor () { }

  ngOnInit () {
    this.editableElm.nativeElement.style.width = this.width
    this.editableElm.nativeElement.style.color = this.color
    this.editableElm.nativeElement.style.textAlign = this.textAlign
    this.editableElm.nativeElement.value = this.value
  }

  ngOnChanges (changes: {value: SimpleChange}) {
    if (changes.value.currentValue !== this.editableElm.nativeElement.value) {
      this.editableElm.nativeElement.value = changes.value.currentValue
    }
  }

  iconSet () {
    return this.icon !== ''
  }

  toggleViewState () {
    if (!this.editState) {
      this.preEditState = false
      this.bottomLine.nativeElement.style.width = 0
    }
  }

  togglePreEditState () {
    if (!this.editState) {
      this.viewState = false
      this.bottomLine.nativeElement.style.height = '1px'
      this.bottomLine.nativeElement.style.width = '100%'
    }
  }

  edit () {
    this.bottomLine.nativeElement.style.height = '2px'
    if (this.bottomLine.nativeElement.style.width !== '100%') {
      this.bottomLine.nativeElement.style.width = '100%'
    }
    if (this.viewState) {
      this.viewState = false
    }
    if (this.selectAll) {
      this.editableElm.nativeElement.select()
    }
    this.editState = true
  }

  done (event) {
    if (event.type === 'keydown' && event.keyCode === 13) {
      this.editableElm.nativeElement.blur()
    } else if (this.editState && event.type === 'blur') {
      this.editState = false
      this.preEditState = false
      this.bottomLine.nativeElement.style.width = 0
      const currentValue = this.editableElm.nativeElement.value
      if (currentValue === '') {
        this.editableElm.nativeElement.value = this.emptyValue
      }
      if (this.value !== currentValue) {
        this.value = currentValue
        this.onDone.emit(currentValue)
      }
    }
  }
}
