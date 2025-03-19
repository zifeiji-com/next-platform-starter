import { getNetlifyContext } from 'utils';
import { Alert } from './alert';
import { Markdown } from './markdown';

const noNetlifyContextAlert = `

`;

export function ContextAlert(props) {
    const { addedChecksFunction } = props;
    const ctx = getNetlifyContext();

    let markdownText = null;
    if (!ctx) {
        markdownText = noNetlifyContextAlert;
    } else if (addedChecksFunction) {
        markdownText = addedChecksFunction(ctx);
    }

    if (markdownText) {
        return (
            <Alert>
                <Markdown content={markdownText} />
            </Alert>
        );
    } else {
        return <></>;
    }
}
