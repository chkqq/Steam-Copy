import styles from './style.module.scss'

interface TableTitleProps {
    title: string
    description: boolean
}

const TableTitle: React.FC<TableTitleProps> = ({title, description}) => {
    return (
        <div className={styles.tablesTitleBox}>
            <p className={styles.tablesTitle}>{title}</p>
            { description && <span className={styles.tablesDescription}>Избранная метка</span>}
        </div>
    )
}

export default TableTitle