/*
 *  Copyright (c) 2017, The Regents of the University of California,
 *  through Lawrence Berkeley National Laboratory (subject to receipt
 *  of any required approvals from the U.S. Dept. of Energy).
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree.
 */

import * as Immutable from "immutable";
import * as _ from "lodash";

import { Event } from "./event";
import { grouped, GroupedCollection, GroupingFunction } from "./groupedcollection";
import { Index } from "./index";
import { Key } from "./key";
import { Period } from "./period";
import { Time } from "./time";
import { timerange, TimeRange } from "./timerange";
import { windowed, WindowedCollection } from "./windowedcollection";

import { Align } from "./align";
import { Collapse } from "./collapse";
import { Rate } from "./rate";

import { AlignmentMethod, AlignmentOptions, CollapseOptions, RateOptions } from "./types";

/**
 * Abstract base class used by classes which maybe passed within the streaming code.
 */
export abstract class Base {}
