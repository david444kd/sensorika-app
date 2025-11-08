export interface ChildReportData {
  name: string
  age: number
  comment: string
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }
  return text.replace(/[&<>"']/g, (m) => map[m])
}

function getAgeLabel(age: number): string {
  if (age === 1) return 'год'
  if (age < 5) return 'года'
  return 'лет'
}

function formatDate(): string {
  return new Date().toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

function generateHtmlContent(values: ChildReportData): string {
  const currentDate = formatDate()
  const escapedName = escapeHtml(values.name)
  const escapedComment = values.comment ? escapeHtml(values.comment) : ''
  const ageLabel = getAgeLabel(values.age)

  return `
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Отчет для родителя - ${escapedName}</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 40px 20px;
            background: #fff;
        }
        .header {
            text-align: center;
            margin-bottom: 40px;
            border-bottom: 3px solid #2563eb;
            padding-bottom: 20px;
        }
        .header h1 {
            font-size: 28px;
            color: #1e40af;
            margin-bottom: 10px;
        }
        .header .date {
            color: #666;
            font-size: 14px;
        }
        .section {
            margin-bottom: 30px;
        }
        .section-title {
            font-size: 20px;
            font-weight: bold;
            color: #1e40af;
            margin-bottom: 15px;
            padding-bottom: 8px;
            border-bottom: 2px solid #e5e7eb;
        }
        .info-item {
            margin-bottom: 15px;
        }
        .info-label {
            font-weight: 600;
            color: #555;
            margin-bottom: 5px;
        }
        .info-value {
            color: #333;
            font-size: 16px;
        }
        .comment-box {
            background: #f8fafc;
            border-left: 4px solid #2563eb;
            padding: 15px;
            border-radius: 4px;
            margin-top: 10px;
        }
        .footer {
            margin-top: 40px;
            padding-top: 20px;
            border-top: 2px solid #e5e7eb;
            text-align: center;
            color: #666;
            font-size: 14px;
        }
        @media print {
            body {
                padding: 20px;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>Отчет для родителя</h1>
        <div class="date">Дата составления: ${currentDate}</div>
    </div>
    
    <div class="section">
        <div class="section-title">Информация о ребенке</div>
        <div class="info-item">
            <div class="info-label">Имя:</div>
            <div class="info-value">${escapedName}</div>
        </div>
        <div class="info-item">
            <div class="info-label">Возраст:</div>
            <div class="info-value">${values.age} ${ageLabel}</div>
        </div>
    </div>
    
    ${values.comment ? `
    <div class="section">
        <div class="section-title">Комментарий специалиста</div>
        <div class="comment-box">
            ${escapedComment.replace(/\n/g, '<br>')}
        </div>
    </div>
    ` : ''}
    
    <div class="footer">
        <p>Данный отчет был сформирован автоматически специалистом</p>
        <p>Для вопросов обращайтесь к вашему специалисту</p>
    </div>
</body>
</html>
  `
}

function generateFileName(name: string): string {
  const sanitizedName = name.replace(/[^a-zA-ZА-Яа-я0-9]/g, '_')
  const date = new Date().toISOString().split('T')[0]
  return `Отчет_${sanitizedName}_${date}.html`
}

export function generateChildReport(values: ChildReportData): void {
  const htmlContent = generateHtmlContent(values)
  
  const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = generateFileName(values.name)
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

