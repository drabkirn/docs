class DocsRender < Redcarpet::Render::HTML
  def block_code(code, language)
    %(<pre class="code-pre"><span class="code-pre-span">#{language}</span><code><xmp>#{code}</xmp></code></pre>)
  end

  def list(contents, list_type)
    if list_type == :ordered
      return %(<ol>#{contents}</ol>)
    end
    if list_type == :unordered
      return %(<ul class="ul-circle">#{contents}</ul>)
    end
  end

  def paragraph(text)
    if text == "<br />"
      return %(<p class="fs-1">#{text}</p>)
    end
    %(<p>#{text}</p>)
  end
end