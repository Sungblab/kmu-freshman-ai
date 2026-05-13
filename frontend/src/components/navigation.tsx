import {
  BookOpen,
  BriefcaseBusiness,
  CalendarDays,
  ClipboardList,
  FolderKanban,
  MessageSquareText,
  Settings,
  X,
} from "lucide-react";

import type { ChatSessionSummary } from "../types/api";
import type { WorkspacePage } from "../types/navigator";

const workspaceItems: Array<{
  id: WorkspacePage;
  label: string;
  count: number;
  icon: typeof MessageSquareText;
}> = [
  { id: "chat", label: "AI 상담", count: 12, icon: MessageSquareText },
  { id: "roadmap", label: "학업 로드맵", count: 4, icon: BookOpen },
  { id: "career", label: "진로/취업", count: 3, icon: BriefcaseBusiness },
  { id: "project", label: "프로젝트", count: 2, icon: FolderKanban },
  { id: "schedule", label: "일정", count: 6, icon: CalendarDays },
];

interface NavigationProps {
  activePage: WorkspacePage;
  sessions: ChatSessionSummary[];
  setActivePage: (page: WorkspacePage) => void;
  onNewChat: () => void;
  onOpenSession: (sessionId: string) => void;
}

interface MobileDrawerProps extends NavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar(props: NavigationProps) {
  const { activePage, sessions, setActivePage, onNewChat, onOpenSession } = props;
  return (
    <aside className="hidden min-w-0 border-r border-[#ded7cb] bg-[#f1ede5] p-3 lg:block">
      <BrandHeader />

      <button
        className="h-10 w-full rounded-lg bg-[#191817] text-sm font-semibold text-[#fffdf8]"
        type="button"
        onClick={onNewChat}
      >
        새 상담
      </button>

      <SidebarLabel>Workspace</SidebarLabel>
      <WorkspaceNav activePage={activePage} setActivePage={setActivePage} />

      <SidebarLabel>Recent chats</SidebarLabel>
      <RecentChats
        sessions={sessions}
        setActivePage={setActivePage}
        onOpenSession={onOpenSession}
      />

      <div className="absolute bottom-3 left-3 right-auto hidden w-[248px] space-y-1 lg:block">
        <UtilityNav setActivePage={setActivePage} itemHeight="h-9" />
      </div>
    </aside>
  );
}

export function MobileDrawer({
  activePage,
  isOpen,
  sessions,
  setActivePage,
  onClose,
  onNewChat,
  onOpenSession,
}: MobileDrawerProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-40 lg:hidden" role="dialog" aria-modal="true">
      <button
        className="absolute inset-0 bg-[#191817]/30"
        type="button"
        aria-label="모바일 메뉴 닫기"
        onClick={onClose}
      />
      <aside className="relative z-10 flex h-full w-[min(320px,88vw)] flex-col border-r border-[#ded7cb] bg-[#f1ede5] p-3 shadow-xl">
        <div className="flex items-center justify-between gap-3 px-2 pb-4 pt-1">
          <BrandHeader compact />
          <button
            className="grid h-9 w-9 place-items-center rounded-lg border border-[#c9c0b3] bg-[#fffdf8]"
            type="button"
            aria-label="메뉴 닫기"
            onClick={onClose}
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <button
          className="h-10 w-full rounded-lg bg-[#191817] text-sm font-semibold text-[#fffdf8]"
          type="button"
          onClick={onNewChat}
        >
          새 상담
        </button>

        <div className="min-h-0 flex-1 overflow-y-auto">
          <SidebarLabel>Workspace</SidebarLabel>
          <WorkspaceNav activePage={activePage} setActivePage={setActivePage} mobile />

          <SidebarLabel>Recent chats</SidebarLabel>
          <RecentChats
            sessions={sessions}
            setActivePage={setActivePage}
            onOpenSession={onOpenSession}
          />
        </div>

        <div className="border-t border-[#ded7cb] pt-2">
          <UtilityNav setActivePage={setActivePage} itemHeight="h-10" />
        </div>
      </aside>
    </div>
  );
}

function BrandHeader({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`flex min-w-0 items-center gap-3 ${compact ? "" : "px-2 pb-4 pt-1"}`}>
      <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-[#c9c0b3] bg-[#fffdf8] text-sm font-bold">
        K
      </div>
      <div className="min-w-0">
        <strong className="block truncate text-sm font-semibold tracking-normal">
          SW Navigator
        </strong>
        <span className="block truncate text-xs text-[#716c63]">personal campus AI</span>
      </div>
    </div>
  );
}

function WorkspaceNav({
  activePage,
  setActivePage,
  mobile = false,
}: {
  activePage: WorkspacePage;
  setActivePage: (page: WorkspacePage) => void;
  mobile?: boolean;
}) {
  return (
    <div className="space-y-1">
      {workspaceItems.map((item) => {
        const Icon = item.icon;
        const selected = activePage === item.id;
        return (
          <button
            className={`flex ${mobile ? "min-h-10" : "min-h-9"} w-full items-center justify-between rounded-lg px-2.5 text-sm ${
              selected
                ? "border border-[#ded7cb] bg-[#fffdf8] text-[#191817]"
                : "text-[#3d3b37] hover:bg-[#f7f2ea]"
            }`}
            key={item.id}
            type="button"
            onClick={() => setActivePage(item.id)}
          >
            <span className="flex items-center gap-2">
              <Icon className="h-4 w-4" aria-hidden="true" />
              {item.label}
            </span>
            <span className="text-xs text-[#938d83]">{item.count}</span>
          </button>
        );
      })}
    </div>
  );
}

function RecentChats({
  sessions,
  setActivePage,
  onOpenSession,
}: {
  sessions: ChatSessionSummary[];
  setActivePage: (page: WorkspacePage) => void;
  onOpenSession: (sessionId: string) => void;
}) {
  const chats = sessions.length
    ? sessions
    : [
        {
          id: "sample-1",
          title: "AI 트랙을 어떻게 준비할까?",
          intent: "학업/진로",
        },
        {
          id: "sample-2",
          title: "자료구조 과제 마감 정리",
          intent: "일정",
        },
      ];

  return (
    <div className="space-y-1">
      {chats.map((chat, index) => (
        <button
          className={`w-full rounded-lg px-2.5 py-2 text-left ${
            index === 0 ? "border border-[#ded7cb] bg-[#fffdf8]" : "hover:bg-[#f7f2ea]"
          }`}
          key={chat.id}
          type="button"
          onClick={() => (sessions.length ? onOpenSession(chat.id) : setActivePage("chat"))}
        >
          <strong className="block truncate text-sm font-semibold">{chat.title ?? "새 상담"}</strong>
          <span className="mt-1 block text-xs text-[#716c63]">
            {chat.intent ?? "general"}
          </span>
        </button>
      ))}
    </div>
  );
}

function UtilityNav({
  setActivePage,
  itemHeight,
}: {
  setActivePage: (page: WorkspacePage) => void;
  itemHeight: "h-9" | "h-10";
}) {
  return (
    <>
      <button
        className={`flex ${itemHeight} w-full items-center gap-2 rounded-lg px-2.5 text-sm text-[#3d3b37] hover:bg-[#f7f2ea]`}
        type="button"
        onClick={() => setActivePage("logs")}
      >
        <ClipboardList className="h-4 w-4" aria-hidden="true" />
        LLM 기록
      </button>
      <button
        className={`flex ${itemHeight} w-full items-center gap-2 rounded-lg px-2.5 text-sm text-[#3d3b37] hover:bg-[#f7f2ea]`}
        type="button"
        onClick={() => setActivePage("settings")}
      >
        <Settings className="h-4 w-4" aria-hidden="true" />
        설정
      </button>
    </>
  );
}

function SidebarLabel({ children }: { children: string }) {
  return (
    <p className="mb-2 ml-2 mt-5 text-[11px] font-bold uppercase tracking-[0.06em] text-[#938d83]">
      {children}
    </p>
  );
}
