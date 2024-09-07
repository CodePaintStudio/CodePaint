import {useRef, useState, useEffect} from "react";
import {Editor} from '@toast-ui/react-editor';
import {Button, message} from "antd";
import '@toast-ui/editor/dist/toastui-editor.css';

export default function RichEditor(props) {
    const [content, setContent] = useState(null);

    function addHandle() {
        const rich_content = editorRef.current.getInstance().getHTML();
        if (rich_content === "<p><br></p>") {
            return message.warning("请输入内容！")
        }
        setContent(rich_content);
        message.success("保存成功！");
    }

    const editorRef = useRef();

    useEffect(() => {
        if (content !== null) {
            console.log(content);
        }
    }, [content]);

    return (
        <>
            <Button onClick={addHandle}>保存</Button>
            <Editor
                initialValue=""
                previewStyle="vertical"
                height="600px"
                initialEditType="markdown"
                ref={editorRef}
                language='zh-CN'
            />
        </>
    );
}
