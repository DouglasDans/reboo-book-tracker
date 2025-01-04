import BookStatusRadioGroup from "@/components/forms/book-status-radio-group";
import { MenuFormData } from "@/context/tabbed-menu-layout/MenuFormDataProvider";
import { FormBook } from "@/types/forms.types";
import { createHandleChange } from "@/utils/form.utils";
import styles from './index.module.scss'
import Input from "@/components/forms/input";


export default function BookSituationForm() {
  const [bookData, setBookData] = MenuFormData.useMenuFormData<FormBook>()
  const handleChange = createHandleChange(setBookData)

  return (
    <div className={styles.container}>
      <BookStatusRadioGroup value={bookData.status} setState={setBookData} />

      {/* <div className={styles.inputWrapper}>
        <Input
          title="Data de Início de Leitura"
          subtitle="Opcional. Esse valor é alterado automaticamente quando o status é definido como “Em Andamento”"
          name="startDate"
        />
        <Input
          title="Data de Conclusão de Leitura"
          subtitle="Opcional. Esse valor é alterado automaticamente quando o status é definido como “Concluído”"
          name="completedDate"
        />
      </div> */}

      <Input
        title="Total de Páginas Já lidas"
        subtitle="Opcional. Este valor é gerado automaticamente com base nas suas sessões de leitura. Alterar ele não influencia no cálculo da média nem nas estatísticas pessoais."
        placeholder="0"
        name="pagesRead"
        type="number"
        value={bookData.pagesRead}
        onChange={handleChange}
      />

    </div>
  )
}