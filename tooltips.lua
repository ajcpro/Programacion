local note_count = 0
function Note(elem)
  note_count = note_count + 1
  local texto = pandoc.utils.stringify(elem.content)
  local html = '<span class="tooltip"><span class="nota-llamada">[' .. note_count .. ']</span><span class="tooltiptext">' .. texto .. '</span></span>'
  return pandoc.RawInline('html', html)
end
