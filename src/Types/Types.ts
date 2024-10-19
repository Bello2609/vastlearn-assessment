export interface Option {
    value: number,
    label: string
}
export interface Button{
    text: string,
    type?: "button" | "submit" | "reset"
}
export interface Formselect{
    options: Option[],
    label: string,
    placeholder: string

}