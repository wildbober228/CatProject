import type { ReactNode } from "react";
import type { IntlFormatters } from "react-intl";
import type { Props as ReactIntlFormattedMessageProps } from "react-intl/src/components/message";
import {
    FormattedMessage as ReactIntlFormattedMessage,
    useIntl as useReactIntl,
} from "react-intl";

type FormatMessageArgs = Parameters<IntlFormatters["formatMessage"]>;

type FormattedMessageProps = ReactIntlFormattedMessageProps<
    Record<string, ReactNode>
    > & {
    id?: string;
};

export function FormattedMessage({ id, ...rest }: FormattedMessageProps) {
    return <ReactIntlFormattedMessage id={id} {...rest} />;
}

export function useIntl() {
    const { formatMessage, ...rest } = useReactIntl();

    const typedFormatMessage = (
        descriptor: FormatMessageArgs[0] & {
            id?: string;
        },
        values?: FormatMessageArgs[1],
        options?: FormatMessageArgs[2]
    ) => {
        return formatMessage(descriptor, values, options);
    };

    return {
        ...rest,
        formatMessage: typedFormatMessage,
    };
}
