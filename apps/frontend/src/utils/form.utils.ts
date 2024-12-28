export function createHandleChange<T>(setState: (data: Partial<T>) => void) {
  return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setState({ [name]: value } as Partial<T>)
  }
}
