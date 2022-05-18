import React, { FC } from "react";

import "./Mixins.scss";

export const EasingTable: FC = () => (
    <table className="jkl-mixin-example-table jkl-spacing-2xl--bottom">
        <tr>
            <th className="jkl-mixin-example-table__header">Navn på kurve</th>
            <th className="jkl-mixin-example-table__header">Verdi</th>
        </tr>
        <tr>
            <td className="jkl-mixin-example-table__data">
                <p className="jkl-body">
                    <code className="jkl-portal-inline-code">standard</code>
                </p>
            </td>
            <td className="jkl-mixin-example-table__data">
                <p className="jkl-body">
                    <code className="jkl-portal-inline-code">ease</code>
                </p>
            </td>
        </tr>
        <tr>
            <td className="jkl-mixin-example-table__data">
                <p className="jkl-body">
                    <code className="jkl-portal-inline-code">entrance</code>
                </p>
            </td>
            <td className="jkl-mixin-example-table__data">
                <p className="jkl-body">
                    <code className="jkl-portal-inline-code">ease-out</code>
                </p>
            </td>
        </tr>
        <tr>
            <td className="jkl-mixin-example-table__data">
                <p className="jkl-body">
                    <code className="jkl-portal-inline-code">exit</code>
                </p>
            </td>
            <td className="jkl-mixin-example-table__data">
                <p className="jkl-body">
                    <code className="jkl-portal-inline-code">ease-in</code>
                </p>
            </td>
        </tr>
        <tr>
            <td className="jkl-mixin-example-table__data">
                <p className="jkl-body">
                    <code className="jkl-portal-inline-code">easeInBounceOut</code>
                </p>
            </td>
            <td className="jkl-mixin-example-table__data">
                <p className="jkl-body">
                    <code className="jkl-portal-inline-code">cubic-bezier(0, 0, 0.375, 1.17)</code>
                </p>
            </td>
        </tr>
    </table>
);

export const TimingTable: FC = () => (
    <table className="jkl-mixin-example-table">
        <tr>
            <th className="jkl-mixin-example-table__header">Navn på varighet</th>
            <th className="jkl-mixin-example-table__header">Verdi</th>
        </tr>
        <tr>
            <td className="jkl-mixin-example-table__data">
                <p className="jkl-body">
                    <code className="jkl-portal-inline-code">energetic</code>
                </p>
            </td>
            <td className="jkl-mixin-example-table__data">
                <p className="jkl-body">75ms</p>
            </td>
        </tr>
        <tr>
            <td className="jkl-mixin-example-table__data">
                <p className="jkl-body">
                    <code className="jkl-portal-inline-code">productive</code> (default)
                </p>
            </td>
            <td className="jkl-mixin-example-table__data">
                <p className="jkl-body">150ms</p>
            </td>
        </tr>
        <tr>
            <td className="jkl-mixin-example-table__data">
                <p className="jkl-body">
                    <code className="jkl-portal-inline-code">expressive</code>
                </p>
            </td>
            <td className="jkl-mixin-example-table__data">
                <p className="jkl-body">250ms</p>
            </td>
        </tr>
        <tr>
            <td className="jkl-mixin-example-table__data">
                <p className="jkl-body">
                    <code className="jkl-portal-inline-code">lazy</code>
                </p>
            </td>
            <td className="jkl-mixin-example-table__data">
                <p className="jkl-body">400ms</p>
            </td>
        </tr>
    </table>
);
