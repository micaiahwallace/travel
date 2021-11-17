import { forwardRef, InputHTMLAttributes, LegacyRef } from 'react'
import { Form } from 'semantic-ui-react'
import DatePicker from 'react-datepicker'

interface InputProps {
  label?: string
  placeholder?: string
}

export const IconInputRef = (
  {
    value,
    onClick,
    label,
    placeholder,
  }: InputProps &
    React.DetailedHTMLProps<
      InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
  ref: LegacyRef<HTMLInputElement>
) => {
  return (
    <Form.Field>
      <label>{label}</label>
      <div className="ui left icon input">
        <input
          placeholder={placeholder}
          ref={ref}
          value={value}
          onClick={onClick}
        />
        <i className="calendar icon" aria-hidden="true" />
      </div>
    </Form.Field>
  )
}
IconInputRef.displayName = 'IconInputRef'

const IconInputForwardRef = forwardRef(IconInputRef)

interface Props {
  label?: string
  placeholder?: string
  start?: boolean
  end?: boolean
  date: Date | null
  setDate: (date: Date | null) => void
}

export const DateInput: React.FC<Props> = ({
  label,
  placeholder,
  start,
  end,
  date,
  setDate,
}: Props) => {
  return (
    <DatePicker
      selectsStart={start}
      selectsEnd={end}
      selected={date}
      onChange={(d) => setDate(Array.isArray(d) ? d[0] : d)}
      customInput={
        <IconInputForwardRef label={label} placeholder={placeholder} />
      }
    />
  )
}
