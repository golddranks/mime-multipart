initSidebarItems({"enum":[["Node","A multipart part which could be either a file, in memory, or another multipart container containing nested parts."]],"fn":[["generate_boundary","Generate a valid multipart boundary, statistically unlikely to be found within the content of the parts."],["get_multipart_boundary","Get the `multipart/*` boundary string from `hyper::Headers`"],["read_multipart","Parse a MIME `multipart/*` from a `Read`able stream into a `Vec` of `Node`s, streaming files to disk and keeping the rest in memory.  Recursive `multipart/*` parts will are parsed as well and returned within a `Node::Multipart` variant."],["read_multipart_body","Parse a MIME `multipart/*` from a `Read`able stream into a `Vec` of `Node`s, streaming files to disk and keeping the rest in memory.  Recursive `multipart/*` parts will are parsed as well and returned within a `Node::Multipart` variant."],["write_multipart","Stream a multipart body to the output `stream` given, made up of the `parts` given.  Top-level headers are NOT included in this stream; the caller must send those prior to calling write_multipart(). Returns the number of bytes written, or an error."]],"mod":[["error",""]],"struct":[["FilePart","A file that is to be inserted into a `multipart/*` or alternatively an uploaded file that was received as part of `multipart/*` parsing."],["Part","A multipart part which is not a file (stored in memory)"]]});