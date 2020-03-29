class DocsRender < Redcarpet::Render::HTML
  def block_code(code, language)
    %(<pre class="pre-code"><span class="pre-code-span">#{language}</span><code><xmp>#{code}</xmp></code></pre>)
  end

  def codespan(code)
    %(<code class="code-inline">#{code}</code>)
  end

  def list(contents, list_type)
    if list_type == :ordered
      return %(<ol>#{contents}</ol>)
    end
    if list_type == :unordered
      return %(<ul class="ul-circle">#{contents}</ul>)
    end
  end

  def header(text, header_level)
    chain_text = text.split(" ").join("-").downcase

    %(<h#{header_level} id=#{chain_text}>#{text}</h#{header_level}>)
  end

  def paragraph(text)
    if text == "<br />"
      return %(<p class="fs-1">#{text}</p>)
    end
    %(<p>#{text}</p>)
  end
end