require 'redcarpet'
require 'erb'
require './lib/docs_renderer'

# Get location of all the MD files
all_md_files = Dir[Dir.pwd + "/src/markdown_files/*.md"].sort!


# Read template.html.erb file with READ permission
template_file = File.open('./src/layouts/template.html.erb', 'r')


# Read index.html with WRITE-FULL ALWAYS permission
index_html_file = File.open('./src/index.html', 'w+')


# MD redcarpet init
md_renderer_options = {}

md_extensions = {
  fenced_code_blocks: true
}

md_renderer = DocsRender.new(md_renderer_options)
markdown = Redcarpet::Markdown.new(md_renderer, md_extensions)


# Iterate over all MD src files, convert them into HTML, push them into an array
htmls_text_content = []

all_md_files.each do |md_file|
  md_text_file = File.open(md_file, 'r')
  md_text = md_text_file.read

  htmls_text_content << markdown.render(md_text)
end


# Now, join all of the HTML text contents -> put it in `body_content` variable
body_content = htmls_text_content.join("\n<hr />\n")


# Read the template file content, push HTML content in `body_content` variable
template_content = template_file.read

erb_renderer = ERB.new(template_content)
final_html_output = erb_renderer.result()


# Now put all of the HTML in the `index.html` file
index_html_file.puts(final_html_output)