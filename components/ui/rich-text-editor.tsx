"use client";

import React, { useEffect, useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  List,
  ListOrdered,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Toggle } from "./toggle";

interface RichTextEditorProps {
  content: string;
  onChange: (content: string) => void;
  placeholder?: string;
  className?: string;
}

const ToolbarButton = ({
  onClick,
  isActive = false,
  icon,
}: {
  onClick: () => void;
  isActive?: boolean;
  icon: React.ReactNode;
}) => {
  return (
    <Toggle
      size="sm"
      pressed={isActive}
      onPressedChange={() => onClick()}
      className={cn(
        "h-8 px-2 data-[state=on]:bg-muted",
        isActive ? "text-foreground" : "text-muted-foreground"
      )}
    >
      {icon}
    </Toggle>
  );
};

const RichTextEditor = ({
  content,
  onChange,
  placeholder,
  className,
}: RichTextEditorProps) => {
  const [isMounted, setIsMounted] = useState(false);

  // Handle keyboard shortcuts separately to avoid conflicts
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (
      (e.ctrlKey || e.metaKey) &&
      ["b", "i", "u"].includes(e.key.toLowerCase())
    ) {
      e.stopPropagation();
    }
  };

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        // Configure extensions that are part of StarterKit directly
        bulletList: {
          HTMLAttributes: {
            class: "list-disc pl-6 my-2",
          },
        },
        orderedList: {
          HTMLAttributes: {
            class: "list-decimal pl-6 my-2",
          },
        },
        listItem: {
          HTMLAttributes: {
            class: "pl-1 my-1",
          },
        },
      }),
      Underline,
    ],
    content: content,
    editorProps: {
      attributes: {
        class: cn(
          "prose prose-sm max-w-none min-h-[150px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        // Only add the placeholder if it exists
        ...(placeholder ? { placeholder } : {}),
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    // Add this to prevent SSR hydration issues
    immediatelyRender: false,
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!editor || !isMounted) return null;

  return (
    <div className="relative" onClick={(e) => e.stopPropagation()}>
      <div className="mb-2 flex items-center rounded-md border border-input bg-background p-1 gap-1">
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBold().run()}
          isActive={editor.isActive("bold")}
          icon={<Bold className="h-4 w-4" />}
        />
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleItalic().run()}
          isActive={editor.isActive("italic")}
          icon={<Italic className="h-4 w-4" />}
        />
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          isActive={editor.isActive("underline")}
          icon={<UnderlineIcon className="h-4 w-4" />}
        />
        <div className="mx-1 w-[1px] h-6 bg-border" />
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          isActive={editor.isActive("bulletList")}
          icon={<List className="h-4 w-4" />}
        />
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          isActive={editor.isActive("orderedList")}
          icon={<ListOrdered className="h-4 w-4" />}
        />
      </div>
      <div onKeyDown={handleKeyDown}>
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export { RichTextEditor };
