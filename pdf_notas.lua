function Note(elem)
  local texto = pandoc.utils.stringify(elem.content)
  local html = '<span class="nota-pie">' .. texto .. '</span>'
  return pandoc.RawInline('html', html)
end
