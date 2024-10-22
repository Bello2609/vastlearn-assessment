export interface Option {
    value: number,
    label: string
}
export interface Button{
    text: string,
    type?: "button" | "submit" | "reset"
    onClick: React.MouseEventHandler<HTMLButtonElement>,
    isModal: boolean
}
export interface Formselect{
    options: Option[],
    label: string,
    placeholder: string

}
export interface ConfirmModal{
    msg: string
}
export interface Submitmodal {
    cancel: React.MouseEventHandler<HTMLButtonElement>,
    submit: React.MouseEventHandler<HTMLButtonElement>
}