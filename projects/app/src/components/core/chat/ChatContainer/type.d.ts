import { StreamResponseType } from '@/web/common/api/fetch';
import { ChatCompletionMessageParam } from '@fastgpt/global/core/ai/type';
import {
  ChatHistoryItemResType,
  ChatSiteItemType,
  ToolModuleResponseItemType
} from '@fastgpt/global/core/chat/type';
import { WorkflowInteractiveResponseType } from '@fastgpt/global/core/workflow/template/system/interactive/type';

export type generatingMessageProps = {
  event: SseResponseEventEnum;
  text?: string;
  reasoningText?: string;
  name?: string;
  status?: 'running' | 'finish';
  tool?: ToolModuleResponseItemType;
  interactive?: WorkflowInteractiveResponseType;
  variables?: Record<string, any>;
  nodeResponse?: ChatHistoryItemResType;
  durationSeconds?: number;
};

export type StartChatFnProps = {
  messages: ChatCompletionMessageParam[];
  responseChatItemId?: string;
  controller: AbortController;
  variables: Record<string, any>;
  generatingMessage: (e: generatingMessageProps) => void;
};

export type onStartChatType = (e: StartChatFnProps) => Promise<
  StreamResponseType & {
    isNewChat?: boolean;
  }
>;
